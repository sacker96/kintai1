const { getUserId } = require('../../utils');

export const post = {
  async createDraft(parent: any, args: any, ctx: any, info: any) {
    const userId = getUserId(ctx);
    return '';
  },

  async publish(parent: any, args: any, ctx: any, info: any) {
    const { id } = args;
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId }
    });
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true }
      },
      info
    );
  },

  async deletePost(parent: any, args: any, ctx: any, info: any) {
    const { id } = args;
    const userId = getUserId(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId }
    });
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.deletePost({ where: { id } });
  }
};
