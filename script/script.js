$(function(){
	$('.about').click(function(){
		// $(".Ru").addClass('rotL_R');
		// $(".Fu").addClass('rotL_F hide');

		// $(".Ru").removeClass('hide');
		// $(".L").addClass('hide');
		// $(".U").addClass('hide');
		// $(".B").addClass('hide');
		// $(".D").addClass('hide');
		// setTimeout(function(){
  //           $(".F.u.l").addClass('_ _u _l');
  //           $(".F.u.c").addClass('_ _u _c');
  //           $(".F.u.r").addClass('_ _u _r');
  //           $(".Fu").removeClass('F Fu Fl Fc Fr');

  //           $(".R.u.l").addClass('F Fu Fl');
  //           $(".R.u.c").addClass('F Fu Fc');
  //           $(".R.u.r").addClass('F Fu Fr');
  //           $(".Ru").removeClass('R Ru Rl Rc Rr');

  //           $(".B.u.l").addClass('R Ru Rl');
  //           $(".B.u.c").addClass('R Ru Rc');
  //           $(".B.u.r").addClass('R Ru Rr');
  //           $(".Bu").removeClass('B Bu Bl Bc Br');

  //           $(".L.u.l").addClass('B Bu Bl');
  //           $(".L.u.c").addClass('B Bu Bc');
  //           $(".L.u.r").addClass('B Bu Br');
  //           $(".Lu").removeClass('L Lu Ll Lc Lr');

  //           $("._.u.l").addClass('L Lu Ll');
  //           $("._.u.c").addClass('L Lu Lc');
  //           $("._.u.r").addClass('L Lu Lr');
  //           $("._u").removeClass('_ _u _l _c _r');
  //           $(".L").addClass('hide');
		// 	$(".Lu").removeClass('rotL_F');
		// 	$(".Fu").removeClass('rotL_R');


		// 	$(".Rm").addClass('rotL_R');
		// 	$(".Fm").addClass('rotL_F hide');

		// 	$(".Rm").removeClass('hide');
		// 	$(".L").addClass('hide');
		// 	$(".U").addClass('hide');
		// 	$(".B").addClass('hide');
		// 	$(".D").addClass('hide');
  //       },450)
  //       setTimeout(function(){
  //           $(".Rm").addClass('rotL_R');
		// 	$(".Fm").addClass('rotL_F hide');

		// 	$(".Rm").removeClass('hide');
		// 	$(".L").addClass('hide');
		// 	$(".U").addClass('hide');
		// 	$(".B").addClass('hide');
		// 	$(".D").addClass('hide');
  //       },451)
  //       setTimeout(function(){
  //           $(".F.m.l").addClass('_ _m _l');
  //           $(".F.m.c").addClass('_ _m _c');
  //           $(".F.m.r").addClass('_ _m _r');
  //           $(".Fm").removeClass('F Fm Fl Fc Fr');

  //           $(".R.m.l").addClass('F Fm Fl');
  //           $(".R.m.c").addClass('F Fm Fc');
  //           $(".R.m.r").addClass('F Fm Fr');
  //           $(".Rm").removeClass('R Rm Rl Rc Rr');

  //           $(".B.m.l").addClass('R Rm Rl');
  //           $(".B.m.c").addClass('R Rm Rc');
  //           $(".B.m.r").addClass('R Rm Rr');
  //           $(".Bm").removeClass('B Bm Bl Bc Br');

  //           $(".L.m.l").addClass('B Bm Bl');
  //           $(".L.m.c").addClass('B Bm Bc');
  //           $(".L.m.r").addClass('B Bm Br');
  //           $(".Lm").removeClass('L Lm Ll Lc Lr');

  //           $("._.m.l").addClass('L Lm Ll');
  //           $("._.m.c").addClass('L Lm Lc');
  //           $("._.m.r").addClass('L Lm Lr');
  //           $("._m").removeClass('_ _m _l _c _r');
  //           $(".L").addClass('hide');
		// 	$(".Lm").removeClass('rotL_F');
		// 	$(".Fm").removeClass('rotL_R');
  //       },900)
        setTimeout(function(){
            $(".Dr").addClass('rotU_D');
			$(".Fr").addClass('rotU_F hide');

			$(".Dr").removeClass('hide');
			$(".L").addClass('hide');
			$(".U").addClass('hide');
			$(".B").addClass('hide');
			$(".R").addClass('hide');
        },910)
        setTimeout(function(){
            $(".F.u.r").addClass('_ _u _r');
            $(".F.m.r").addClass('_ _m _r');
            $(".F.d.r").addClass('_ _d _r');
            $(".Fr").removeClass('F Fu Fm Fd Fr');

            $(".D.u.r").addClass('F Fu Fr');
            $(".D.m.r").addClass('F Fm Fr');
            $(".D.d.r").addClass('F Fd Fr');
            $(".Dr").removeClass('D Du Dm Dd Dr');

            $(".Bu.Bl").addClass('D Dd Dr r d');
            $(".Bu.Bl").removeClass('u');
            $(".Bm.Bl").addClass('D Dm Dr r');
            $(".Bd.Bl").addClass('D Du Dr r u');
            $(".Bd.Bl").removeClass('d');
            $(".Bl").removeClass('B Bu Bm Bd Bl l');

            $(".Uu.Ur").addClass('B Bd Bl l d');
            $(".Uu.Ur").removeClass('u');
            $(".Um.Ur").addClass('B Bm Bl l');
            $(".Ud.Ur").addClass('B Bu Bl l u');
            $(".Ud.Ur").removeClass('d');
            $(".Ur").removeClass('U Uu Um Ud Ur r');

            $("._.u.r").addClass('U Uu Ur');
            $("._.m.r").addClass('U Um Ur');
            $("._.d.r").addClass('U Ud Ur');
            $("._r").removeClass('_ _u _m _d _r');
            $(".D").addClass('hide');
			$(".Ur").removeClass('rotU_F');
			$(".Fr").removeClass('rotU_D');
        },1360)
	});
 });