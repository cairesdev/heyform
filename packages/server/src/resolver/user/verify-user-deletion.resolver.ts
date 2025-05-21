import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { Auth, User } from '@decorator'
import { VerifyUserDeletionInput } from '@graphql'
import { UserModel } from '@model'
import { MailService } from '@service'

@Resolver()
@Auth()
export class VerifyUserDeletionResolver {
  constructor(private readonly mailService: MailService) {}

  @Mutation(returns => Boolean)
  async verifyUserDeletion(
    @User() user: UserModel,
    @Args('input') input: VerifyUserDeletionInput
  ): Promise<boolean> {
    await this.mailService.scheduleAccountDeletionAlert(user.email, user.name)

    return true
  }
}
