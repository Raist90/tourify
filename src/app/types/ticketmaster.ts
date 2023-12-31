import z from 'zod'

export const ticketmasterSchema = z.object({
  _embedded: z.object({
    events: z.array(
      z.object({
        _embedded: z.object({
          attractions: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
            }),
          ),
          venues: z.array(
            z.object({
              city: z.object({
                name: z.string(),
              }),
              name: z.string(),
            }),
          ),
        }),
        id: z.string(),
        images: z.array(
          z.object({
            width: z.number(),
            url: z.string(),
          }),
        ),
        name: z.string(),
        dates: z.object({
          start: z.object({
            localDate: z.string(),
          }),
        }),
      }),
    ),
  }),
})

export type TicketmasterResponseType = z.infer<typeof ticketmasterSchema>
