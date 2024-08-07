import { solvePart1, solvePart2 } from './solution';

const input = `
%jv -> rn, jn
&fb -> hb, vk, fz, kl, cg
%rr -> vm, gp
&gp -> vm, cb, bd, qm, xf, pk
%hm -> ql
%cf -> dx, fb
%cg -> kl
%hv -> kg, fb
%hs -> jv
%bd -> dt
%xv -> mv, gp
%js -> zb, jl
%rn -> bk, jn
%lp -> hm
%dx -> fb, jm
%ss -> lp
&hn -> xn
%bh -> jl, ms
%km -> jl, lm
%mv -> gp, qm
&jl -> km, lm, ms, mp, lr, zb, bg
%pt -> jt, jl
%cb -> bd
%xt -> jn, jf
%kg -> fb
%dg -> jn
%rt -> fb, hb
broadcaster -> km, xt, pk, vk
%lr -> pt
%vm -> bf
%hx -> qd, jl
&mp -> xn
%hb -> pd
%vk -> cg, fb
%kl -> rs
%pk -> gp, cb
%jt -> hx, jl
&jn -> hs, lp, hm, hn, ql, xt, ss
%bg -> js
%kz -> ss, jn
%bf -> fx, gp
%bk -> dg, jn
%qm -> rr
%fx -> gp, dp
%dp -> gp
%jf -> jn, kz
%jm -> hv, fb
%ql -> hs
%ms -> bg
%zb -> lr
%rs -> fb, rt
%dt -> xv, gp
%lm -> bh
&xf -> xn
%pd -> cf, fb
%qd -> jl
&xn -> rx
&fz -> xn
`.trim();

console.log('part 1 result:', solvePart1(input));
console.log('part 2 result:', solvePart2(input));
