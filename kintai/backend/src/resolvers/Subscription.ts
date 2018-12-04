export const Subscription = {
  feedSubscription: {
    subscribe: (parent:any, args:any, ctx:any, info:any) => {
      return ctx.db.subscription.post(
        {
          where: {
            node: {
              isPublished: true,
            },
          },
        },
        info,
      )
    },
  },
}
