import { UpdateProfileForm } from '../../src/entities/Profile'
import { TestProvider } from '../../src/shared/lib/tests/test-utils'
import { UpdateProfileFormInputs } from '../../src/entities/Profile/model/types/interface'

const defaultValues: UpdateProfileFormInputs = {
  firstName: 'Name',
  lastName: 'LastName',
  username: 'UserName',
  age: 20,
  currency: 'RUB',
  city: 'Moscow',
}

describe('UpdateProfileForm', () => {
  it('playground', () => {
    cy.mount(
      <TestProvider>
        <UpdateProfileForm
          defaultValues={defaultValues}
          onCancel={() => console.log('cancel')}
        />
      </TestProvider>
    )
  })
})
