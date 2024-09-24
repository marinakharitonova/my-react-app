const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800)
  })
  next()
})

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body

    console.log(username)
    console.log(password)

    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { users = [] } = db

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    )

    if (userFromBd) {
      return res.json(userFromBd)
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
})

server.post('/logout', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'User not found' })
  }

  return res.status(200).json({ message: 'success' })
})
server.get('/profile', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'User not found' })
  }

  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { profile = [] } = db

    if (profile) {
      return res.json(profile)
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
})

server.put('/profile', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'User not found' })
  }

  try {
    const newData = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))

    if (newData) {
      const newDb = {
        ...db,
        profile: {
          ...db.profile,
          ...newData,
        },
      }

      try {
        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(newDb))
        return res.status(200).json(newDb.profile)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err.message })
      }
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
})

server.get('/article/:id', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'User not found' })
  }

  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { articles } = db

    const { id } = req.params

    const article = articles ? articles.find(item => item.id === Number(id)) : null

    if (article) {
      return res.json(article)
    }

    return res.status(403).json({ message: 'Article not found' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
})

server.get('/articles', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'User not found' })
  }

  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { articles } = db
    const { query: { limit, page } } = req

    if (articles) {
      const resp = createPaginationResponse(articles, Number(page), Number(limit))
      return res.json(resp)
    }

    return res.status(403).json({ message: 'Article not found' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
})

server.post('/articles', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'User not found' })
  }

  try {
    const newData = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))

    if (newData) {
      const newDb = {
        ...db,
        articles: {
          ...db.articles,
          ...newData,
        },
      }

      try {
        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(newDb))
        return res.status(200)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err.message })
      }
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
})

server.delete('/articles/:id', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'User not found' })
  }

  try {
    const newData = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))


    const { articles } = db

    const { id } = req.params

    const newArticles = articles ? articles.filter(item => item.id !== Number(id)) : null

    if (newArticles) {
      const newDb = {
        ...db,
        articles: {
          ...db.articles,
          ...newData,
        },
      }

      try {
        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(newDb))
        return res.status(200)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err.message })
      }
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
})


// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'User not found' })
  }

  next()
})

server.use(router)

// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port')
})


function createPaginationResponse(items, page, limit = 20) {
  return {
    items: items.slice((page - 1) * limit, page * limit),
    pagination: {
      'current_page': page,
      'total_page': Math.ceil(items.length / limit),
      'per_page': limit,
      'total_items': items.length,
    },
  }
}