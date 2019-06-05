// export function sum(a, b) {
//   return (+a || 0) + (+b || 0);
// }

export function sum(...args) {
  return args.reduce((acc, value) => acc + (+value || 0), 0);
}
