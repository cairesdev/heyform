import { Query, Resolver } from '@nestjs/graphql'

import { Auth, User } from '@decorator'
import { UserModel } from '@model'

@Resolver()
@Auth()
export class UserDeletionCodeResolver {
  constructor() {}

  @Query(returns => Boolean)
  async userDeletionCode(@User() user: UserModel): Promise<boolean> {
    return true
  }
}
