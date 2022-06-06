import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetServerSideProps,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

export type GetServerSidePropsExtended<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  X extends { [key: string]: any } = { [key: string]: any }
> = (
  context: GetServerSidePropsContext<Q> & X
) => Promise<GetServerSidePropsResult<P>>;

export type Augmenter<
  X extends { [key: string]: any } = { [key: string]: any },
  Y extends { [key: string]: any } = { [key: string]: any }
> = <
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
>(
  fn: GetServerSidePropsExtended<P, Q, X>
) => (
  context: GetServerSidePropsContext<Q>
) => Promise<GetServerSidePropsResult<P & Y>>;

export function composeAugmenters<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  Ax extends { [key: string]: any } = { [key: string]: any },
  Ay extends { [key: string]: any } = { [key: string]: any },
  Bx extends { [key: string]: any } = { [key: string]: any },
  By extends { [key: string]: any } = { [key: string]: any },
  Cx extends { [key: string]: any } = { [key: string]: any },
  Cy extends { [key: string]: any } = { [key: string]: any },
  Dx extends { [key: string]: any } = { [key: string]: any },
  Dy extends { [key: string]: any } = { [key: string]: any },
  Ex extends { [key: string]: any } = { [key: string]: any },
  Ey extends { [key: string]: any } = { [key: string]: any },
  Fx extends { [key: string]: any } = { [key: string]: any },
  Fy extends { [key: string]: any } = { [key: string]: any },
  Gx extends { [key: string]: any } = { [key: string]: any },
  Gy extends { [key: string]: any } = { [key: string]: any },
  Hx extends { [key: string]: any } = { [key: string]: any },
  Hy extends { [key: string]: any } = { [key: string]: any },
  Ix extends { [key: string]: any } = { [key: string]: any },
  Iy extends { [key: string]: any } = { [key: string]: any },
  Jx extends { [key: string]: any } = { [key: string]: any },
  Jy extends { [key: string]: any } = { [key: string]: any },
  Kx extends { [key: string]: any } = { [key: string]: any },
  Ky extends { [key: string]: any } = { [key: string]: any },
  Lx extends { [key: string]: any } = { [key: string]: any },
  Ly extends { [key: string]: any } = { [key: string]: any },
  Mx extends { [key: string]: any } = { [key: string]: any },
  My extends { [key: string]: any } = { [key: string]: any }
>(
  fnA: Augmenter<Ax, Ay>,
  fnB: Augmenter<Bx, By>,
  fnC?: Augmenter<Cx, Cy>,
  fnD?: Augmenter<Dx, Dy>,
  fnE?: Augmenter<Ex, Ey>,
  fnF?: Augmenter<Fx, Fy>,
  fnG?: Augmenter<Gx, Gy>,
  fnH?: Augmenter<Hx, Hy>,
  fnI?: Augmenter<Ix, Iy>,
  fnJ?: Augmenter<Jx, Jy>,
  fnK?: Augmenter<Kx, Ky>,
  fnL?: Augmenter<Lx, Ly>,
  fnM?: Augmenter<Mx, My>
): (
  gssp: GetServerSidePropsExtended<P, Q, Ax & Bx>
) => GetServerSideProps<P & Ay & By, Q>;

export function composeAugmenters<
  Ax extends { [key: string]: any } = { [key: string]: any },
  Ay extends { [key: string]: any } = { [key: string]: any },
  Bx extends { [key: string]: any } = { [key: string]: any },
  By extends { [key: string]: any } = { [key: string]: any },
  Cx extends { [key: string]: any } = { [key: string]: any },
  Cy extends { [key: string]: any } = { [key: string]: any },
  Dx extends { [key: string]: any } = { [key: string]: any },
  Dy extends { [key: string]: any } = { [key: string]: any },
  Ex extends { [key: string]: any } = { [key: string]: any },
  Ey extends { [key: string]: any } = { [key: string]: any },
  Fx extends { [key: string]: any } = { [key: string]: any },
  Fy extends { [key: string]: any } = { [key: string]: any },
  Gx extends { [key: string]: any } = { [key: string]: any },
  Gy extends { [key: string]: any } = { [key: string]: any },
  Hx extends { [key: string]: any } = { [key: string]: any },
  Hy extends { [key: string]: any } = { [key: string]: any },
  Ix extends { [key: string]: any } = { [key: string]: any },
  Iy extends { [key: string]: any } = { [key: string]: any },
  Jx extends { [key: string]: any } = { [key: string]: any },
  Jy extends { [key: string]: any } = { [key: string]: any },
  Kx extends { [key: string]: any } = { [key: string]: any },
  Ky extends { [key: string]: any } = { [key: string]: any },
  Lx extends { [key: string]: any } = { [key: string]: any },
  Ly extends { [key: string]: any } = { [key: string]: any },
  Mx extends { [key: string]: any } = { [key: string]: any },
  My extends { [key: string]: any } = { [key: string]: any }
>(
  fnA: Augmenter<Ax, Ay>,
  fnB: Augmenter<Bx, By>,
  fnC?: Augmenter<Cx, Cy>,
  fnD?: Augmenter<Dx, Dy>,
  fnE?: Augmenter<Ex, Ey>,
  fnF?: Augmenter<Fx, Fy>,
  fnG?: Augmenter<Gx, Gy>,
  fnH?: Augmenter<Hx, Hy>,
  fnI?: Augmenter<Ix, Iy>,
  fnJ?: Augmenter<Jx, Jy>,
  fnK?: Augmenter<Kx, Ky>,
  fnL?: Augmenter<Lx, Ly>,
  fnM?: Augmenter<Mx, My>
) {
  return (gssp: any) => async (ctx: any) => {
    return (
      await [fnA, fnB, fnC, fnD, fnE, fnF, fnG, fnH, fnI, fnJ, fnK, fnL, fnM]
        .filter(Boolean)
        .reduceRight(async (acc, curr: any) => {
          return curr(await acc);
        }, gssp)
    )(ctx);
  };
}

export const next = async <
  PropsType extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  X extends { [key: string]: any } = { [key: string]: any },
>(fn: GetServerSidePropsExtended<PropsType, Q, X>, context: GetServerSidePropsContext<Q> & X, props: PropsType): Promise<GetServerSidePropsResult<PropsType>> => {
    const res = await fn({ ...context, more: 'contextData'  });
    if ('props' in res) {
        const currProps = await res.props;
        return {
        props: {
            ...currProps,
            ...props
        },
    };
  }
  return res;
}

// export const aug1: Augmenter<
//   { more: 'contextData' },
//   { common: 'dataForPage' }
// > = fn => async context => {
//     const a = await next(fn, { ...context, more: 'contextData'  }, { common: 'dataForPage' })
//   const res = await fn({ ...context, more: 'contextData'  });
//   if ('props' in res) {
//     const currProps = await res.props;
//     return {
//       props: {
//         ...currProps,
//         common: 'dataForPage',
//       },
//     };
//   }
//   return res;
// };

