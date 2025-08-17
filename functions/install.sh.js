export async function onRequest(context) {
  // mainブランチのinstall.shに直接リダイレクト
  return Response.redirect(
    'https://raw.githubusercontent.com/k1-c/dotf/main/install.sh',
    302
  );
}
