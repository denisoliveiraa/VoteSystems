import {z} from 'zod'
import {prisma} from "../../lib/prisma"
import { FastifyInstance } from "fastify"

export async function createPoll(app: FastifyInstance){
app.post('/polls/:pollId/votes', async (request, reply) => {
  const voteOnPollBody = z.object({
    pollIdOptionId: z.string().uuid()
  })

  const VoteOnPollParams = z.object({
    pollId: z.string().uuid()
  })

  const {pollId} = VoteOnPollParams.parse(request.params)
  const {pollIdOptionId} = voteOnPollBody.parse(request.body)

  return reply.status(201).send()
})
}