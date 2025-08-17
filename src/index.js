export default {
  async fetch(request, env, ctx) {
    // 全てのパスを GitHub の raw URL にリダイレクト
    return Response.redirect(
      'https://raw.githubusercontent.com/k1-c/dotf/main/install.sh',
      302
    );
  },
};