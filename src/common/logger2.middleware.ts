export function logger2(req, res, next) {
  console.log('logger2......');
  next();
}
