/// <reference types="cypress" />

import { login } from './commands/login'
import * as profileCommands from './commands/profile'
import * as articleCommands from './commands/article'

Cypress.Commands.add('login', login)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleCommands)
