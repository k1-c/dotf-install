export default {
  async fetch(_request, _env, _ctx) {
    // 全てのパスを GitHub の raw URL にリダイレクト
    return Response.redirect(
      "https://raw.githubusercontent.com/k1-c/dotf/main/install.sh",
      302
    );
  },
};
