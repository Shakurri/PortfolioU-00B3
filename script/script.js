var Hclicked=1;
var Aclicked=0;
var Wclicked=0;

var w1Cli=0;
var w2Cli=0;
var w3Cli=0;
var w4Cli=0;

var l1Cli=0;
var l2Cli=0;
var l3Cli=0;
var l4Cli=0;
var l5Cli=0;

var con1;
var con2;
var con3;
var con4;
var con5;
var con6;
var con7;
var con8;
var con9;
$(function(){






	$('.about').click(function(){
		if(Aclicked==0){
			w1Cli=0;
			w2Cli=0;
			w3Cli=0;
			w4Cli=0;

			l1Cli=0;
			l2Cli=0;
			l3Cli=0;
			l4Cli=0;
			l5Cli=0;
			$(".like1").removeClass('underline');
			$(".like2").removeClass('underline');
			$(".like3").removeClass('underline');
			$(".like4").removeClass('underline');
			$(".like5").removeClass('underline');

			Hclicked=0;
			Wclicked=0;
			Aclicked=1;
			wR.innerHTML ="□";
			hR.innerHTML ="□";
			aR.innerHTML ="◆";
			$(".likeBox").removeClass('hideS');
			$(".workBox").addClass('hideS');

	        $(".A1.Dr").addClass('rotU_D');
			$(".Fr").addClass('rotU_F hide');

			$(".A1.Dr").removeClass('hide');
	        setTimeout(function(){
	        	// $(".F.u.r").addClass('U Uu Ur');
	         //    $(".F.m.r").addClass('U Um Ur');
	         //    $(".F.d.r").addClass('U Ud Ur');
	            $(".Fr").removeClass('F Fu Fm Fd Fr rotU_F');

	            $(".A1.D.u.r").addClass('F Fu Fr');
	            $(".A1.D.m.r").addClass('F Fm Fr');
	            $(".A1.D.d.r").addClass('F Fd Fr');
	            $(".A1.Dr").removeClass('rotU_D');
	        },450)

	        setTimeout(function(){
	            $(".A2.Ru").addClass('rotL_R');
				$(".Fu").addClass('rotL_F hide');

				$(".A2.Ru").removeClass('hide');
	        },460)
	        setTimeout(function(){
	        	// $(".F.u.l").addClass('L Lu Ll');
	         //    $(".F.u.c").addClass('L Lu Lc');
	         //    $(".F.u.r").addClass('L Lu Lr');
	            $(".Fu").removeClass('F Fu Fl Fc Fr rotL_F');

	            $(".A2.R.u.l").addClass('F Fu Fl');
	            $(".A2.R.u.c").addClass('F Fu Fc');
	            $(".A2.R.u.r").addClass('F Fu Fr');
	            $(".A2.Ru").removeClass('rotL_R');
	        },910)

	        setTimeout(function(){
	            $(".A3.Dc").addClass('rotU_D');
				$(".Fc").addClass('rotU_F hide');

				$(".A3.Dc").removeClass('hide');
	        },920)
	        setTimeout(function(){
	        	// $(".F.u.c").addClass('U Uu Uc');
	         //    $(".F.m.c").addClass('U Um Uc');
	         //    $(".F.d.c").addClass('U Ud Uc');
	            $(".Fc").removeClass('F Fu Fm Fd Fc rotU_F');

	            $(".A3.D.u.c").addClass('F Fu Fc');
	            $(".A3.D.m.c").addClass('F Fm Fc');
	            $(".A3.D.d.c").addClass('F Fd Fc');
	            $(".A3.Dc").removeClass('rotU_D');




	        },1370)
	    }
	});





	$('.home').click(function(){
		if(Hclicked==0){
			Hclicked=1;
			Wclicked=0;
			Aclicked=0;
			w1Cli=0;
			w2Cli=0;
			w3Cli=0;
			w4Cli=0;
			l1Cli=0;
			l2Cli=0;
			l3Cli=0;
			l4Cli=0;
			l5Cli=0;
			wR.innerHTML ="□";
			aR.innerHTML ="□";
			hR.innerHTML ="◆";
			$(".workBox").addClass('hideS');
			$(".likeBox").addClass('hideS');

	        $(".01.Uc").addClass('rotD_U');
			$(".Fc").addClass('rotD_F hide');

			$(".01.Uc").removeClass('hide');
	        setTimeout(function(){
	        	// $(".F.u.c").addClass('D Du Dc');
	         //    $(".F.m.c").addClass('D Dm Dc');
	         //    $(".F.d.c").addClass('D Dd Dc');
	            $(".Fc").removeClass('F Fu Fm Fd Fc rotD_F');

	            $(".01.U.u.c").addClass('F Fu Fc');
	            $(".01.U.m.c").addClass('F Fm Fc');
	            $(".01.U.d.c").addClass('F Fd Fc');
	            $(".01.Uc").removeClass('rotD_U');
	        },450)

	        setTimeout(function(){
	            $(".02.Lu").addClass('rotR_L');
				$(".Fu").addClass('rotR_F hide');

				$(".02.Lu").removeClass('hide');
	        },460)
	        setTimeout(function(){
	        	// $(".F.u.l").addClass('R Ru Rl');
	         //    $(".F.u.c").addClass('R Ru Rc');
	         //    $(".F.u.r").addClass('R Ru Rr');
	            $(".Fu").removeClass('F Fu Fl Fc Fr rotR_F');

	            $(".02.L.u.l").addClass('F Fu Fl');
	            $(".02.L.u.c").addClass('F Fu Fc');
	            $(".02.L.u.r").addClass('F Fu Fr');
	            $(".02.Lu").removeClass('rotR_L');
	        },910)

	        setTimeout(function(){
	            $(".03.Ur").addClass('rotD_U');
				$(".Fr").addClass('rotD_F hide');

				$(".03.Ur").removeClass('hide');
	        },920)
	        setTimeout(function(){
	            // $(".F.u.r").addClass('D Du Dr');
	            // $(".F.m.r").addClass('D Dm Dr');
	            // $(".F.d.r").addClass('D Dd Dr');
	            $(".Fr").removeClass('F Fu Fm Fd Fr rotD_F');

	            $(".03.U.u.r").addClass('F Fu Fr');
	            $(".03.U.m.r").addClass('F Fm Fr');
	            $(".03.U.d.r").addClass('F Fd Fr');
	            $(".03.Ur").removeClass('rotD_U');
	        },1370)

	   //      setTimeout(function(){
	   //          $(".04.Dl").addClass('rotU_D');
				// $(".Fl").addClass('rotU_F hide');

				// $(".04.Dl").removeClass('hide');
	   //      },1380)
	   //      setTimeout(function(){
	   //      	// $(".F.u.c").addClass('U Uu Uc');
	   //       //    $(".F.m.c").addClass('U Um Uc');
	   //       //    $(".F.d.c").addClass('U Ud Uc');
	   //          $(".Fl").removeClass('F Fu Fm Fd Fl rotU_F');

	   //          $(".04.D.u.l").addClass('F Fu Fl');
	   //          $(".04.D.m.l").addClass('F Fm Fl');
	   //          $(".04.D.d.l").addClass('F Fd Fl');
	   //          $(".04.Dl").removeClass('rotU_D');




	   //      },1830)
	    }
	});



	$('.works').click(function(){
		if(Wclicked==0){
			l1Cli=0;
			l2Cli=0;
			l3Cli=0;
			l4Cli=0;
			l5Cli=0;
			Hclicked=0;
			Wclicked=1;
			Aclicked=0;
			w1Cli=1;
			$(".work1").addClass('underline');
			w2Cli=0;
			$(".work2").removeClass('underline');
			w3Cli=0;
			$(".work3").removeClass('underline');
			w4Cli=0;
			$(".work4").removeClass('underline');
			hR.innerHTML ="□";
			aR.innerHTML ="□";
			wR.innerHTML ="◆";
			$(".workBox").removeClass('hideS');
			$(".likeBox").addClass('hideS');

	        $(".B1.Ur").addClass('rotD_U');
			$(".Fr").addClass('rotD_F hide');

			$(".B1.Ur").removeClass('hide');
	        setTimeout(function(){
	        	// $(".F.u.r").addClass('D Du Dr');
	         //    $(".F.m.r").addClass('D Dm Dr');
	         //    $(".F.d.r").addClass('D Dd Dr');
	            $(".Fr").removeClass('F Fu Fm Fd Fr rotD_F');

	            $(".B1.U.u.r").addClass('F Fu Fr');
	            $(".B1.U.m.r").addClass('F Fm Fr');
	            $(".B1.U.d.r").addClass('F Fd Fr');
	            $(".B1.Ur").removeClass('rotD_U');
	        },450)

	        setTimeout(function(){
	            $(".B2.Dl").addClass('rotU_D');
				$(".Fl").addClass('rotU_F hide');

				$(".B2.Dl").removeClass('hide');
	        },460)
	        setTimeout(function(){
	        	// $(".F.u.l").addClass('U Uu Ul');
	         //    $(".F.m.l").addClass('U Um Ul');
	         //    $(".F.d.l").addClass('U Ud Ul');
	            $(".Fl").removeClass('F Fu Fm Fd Fl rotU_F');

	            $(".B2.D.u.l").addClass('F Fu Fl');
	            $(".B2.D.m.l").addClass('F Fm Fl');
	            $(".B2.D.d.l").addClass('F Fd Fl');
	            $(".B2.Dl").removeClass('rotU_D');
	        },910)

	        setTimeout(function(){
	            $(".B3.Uc").addClass('rotD_U');
				$(".Fc").addClass('rotD_F hide');

				$(".B3.Uc").removeClass('hide');
	        },920)
	        setTimeout(function(){
	            // $(".F.u.c").addClass('D Du Dc');
	            // $(".F.m.c").addClass('D Dm Dc');
	            // $(".F.d.c").addClass('D Dd Dc');
	            $(".Fc").removeClass('F Fu Fm Fd Fc rotD_F');

	            $(".B3.U.u.c").addClass('F Fu Fc');
	            $(".B3.U.m.c").addClass('F Fm Fc');
	            $(".B3.U.d.c").addClass('F Fd Fc');
	            $(".B3.Uc").removeClass('rotD_U');
	        },1370)
	    }
	});

	$('.work1').click(function(){
		if(w1Cli==0){
			l1Cli=0;
			l2Cli=0;
			l3Cli=0;
			l4Cli=0;
			l5Cli=0;
			Hclicked=0;
			Wclicked=1;
			Aclicked=0;
			w1Cli=1;
			$(".work1").addClass('underline');
			w2Cli=0;
			$(".work2").removeClass('underline');
			w3Cli=0;
			$(".work3").removeClass('underline');
			w4Cli=0;
			$(".work4").removeClass('underline');
			hR.innerHTML ="□";
			aR.innerHTML ="□";
			wR.innerHTML ="◆";
			$(".workBox").removeClass('hideS');
			$(".likeBox").addClass('hideS');

	        $(".B1.Ur").addClass('rotD_U');
			$(".Fr").addClass('rotD_F hide');

			$(".B1.Ur").removeClass('hide');
	        setTimeout(function(){
	        	// $(".F.u.r").addClass('D Du Dr');
	         //    $(".F.m.r").addClass('D Dm Dr');
	         //    $(".F.d.r").addClass('D Dd Dr');
	            $(".Fr").removeClass('F Fu Fm Fd Fr rotD_F');

	            $(".B1.U.u.r").addClass('F Fu Fr');
	            $(".B1.U.m.r").addClass('F Fm Fr');
	            $(".B1.U.d.r").addClass('F Fd Fr');
	            $(".B1.Ur").removeClass('rotD_U');
	        },450)

	        setTimeout(function(){
	            $(".B2.Dl").addClass('rotU_D');
				$(".Fl").addClass('rotU_F hide');

				$(".B2.Dl").removeClass('hide');
	        },460)
	        setTimeout(function(){
	        	// $(".F.u.l").addClass('U Uu Ul');
	         //    $(".F.m.l").addClass('U Um Ul');
	         //    $(".F.d.l").addClass('U Ud Ul');
	            $(".Fl").removeClass('F Fu Fm Fd Fl rotU_F');

	            $(".B2.D.u.l").addClass('F Fu Fl');
	            $(".B2.D.m.l").addClass('F Fm Fl');
	            $(".B2.D.d.l").addClass('F Fd Fl');
	            $(".B2.Dl").removeClass('rotU_D');
	        },910)

	        setTimeout(function(){
	            $(".B3.Uc").addClass('rotD_U');
				$(".Fc").addClass('rotD_F hide');

				$(".B3.Uc").removeClass('hide');
	        },920)
	        setTimeout(function(){
	            // $(".F.u.c").addClass('D Du Dc');
	            // $(".F.m.c").addClass('D Dm Dc');
	            // $(".F.d.c").addClass('D Dd Dc');
	            $(".Fc").removeClass('F Fu Fm Fd Fc rotD_F');

	            $(".B3.U.u.c").addClass('F Fu Fc');
	            $(".B3.U.m.c").addClass('F Fm Fc');
	            $(".B3.U.d.c").addClass('F Fd Fc');
	            $(".B3.Uc").removeClass('rotD_U');
	        },1370)
	    }
	});
	$('.work2').click(function(){
		if(w2Cli==0){
			l1Cli=0;
			l2Cli=0;
			l3Cli=0;
			l4Cli=0;
			l5Cli=0;
			Hclicked=0;
			Wclicked=1;
			Aclicked=0;
			w1Cli=0;
			$(".work1").removeClass('underline');
			w2Cli=1;
			$(".work2").addClass('underline');
			w3Cli=0;
			$(".work3").removeClass('underline');
			w4Cli=0;
			$(".work4").removeClass('underline');
			hR.innerHTML ="□";
			aR.innerHTML ="□";
			wR.innerHTML ="◆";
			$(".workBox").removeClass('hideS');
			$(".likeBox").addClass('hideS');

	        $(".C1.Ur").addClass('rotD_U');
			$(".Fr").addClass('rotD_F hide');

			$(".C1.Ur").removeClass('hide');
	        setTimeout(function(){
	        	// $(".F.u.r").addClass('D Du Dr');
	         //    $(".F.m.r").addClass('D Dm Dr');
	         //    $(".F.d.r").addClass('D Dd Dr');
	            $(".Fr").removeClass('F Fu Fm Fd Fr rotD_F');

	            $(".C1.U.u.r").addClass('F Fu Fr');
	            $(".C1.U.m.r").addClass('F Fm Fr');
	            $(".C1.U.d.r").addClass('F Fd Fr');
	            $(".C1.Ur").removeClass('rotD_U');
	        },450)

	        setTimeout(function(){
	            $(".C2.Uc").addClass('rotD_U');
				$(".Fc").addClass('rotD_F hide');

				$(".C2.Uc").removeClass('hide');
	        },460)
	        setTimeout(function(){
	        	$(".Fc").removeClass('F Fu Fm Fd Fc rotD_F');

	            $(".C2.U.u.c").addClass('F Fu Fc');
	            $(".C2.U.m.c").addClass('F Fm Fc');
	            $(".C2.U.d.c").addClass('F Fd Fc');
	            $(".C2.Uc").removeClass('rotD_U');
	        },910)

	        setTimeout(function(){
	            $(".C3.Ld").addClass('rotR_L');
				$(".Fd").addClass('rotR_F hide');

				$(".C3.Ld").removeClass('hide');
	        },920)
	        setTimeout(function(){
	            // $(".F.u.c").addClass('D Du Dc');
	            // $(".F.m.c").addClass('D Dm Dc');
	            // $(".F.d.c").addClass('D Dd Dc');
	            $(".Fd").removeClass('F Fd Fl Fc Fr rotR_F');

	            $(".C3.L.d.l").addClass('F Fd Fl');
	            $(".C3.L.d.c").addClass('F Fd Fc');
	            $(".C3.L.d.r").addClass('F Fd Fr');
	            $(".C3.Ld").removeClass('rotR_L');
	        },1370)
	    }
	});
	$('.work3').click(function(){
		if(w3Cli==0){
			l1Cli=0;
			l2Cli=0;
			l3Cli=0;
			l4Cli=0;
			l5Cli=0;
			Hclicked=0;
			Wclicked=1;
			Aclicked=0;
			w1Cli=0;
			$(".work1").removeClass('underline');
			w2Cli=0;
			$(".work2").removeClass('underline');
			w3Cli=1;
			$(".work3").addClass('underline');
			w4Cli=0;
			$(".work4").removeClass('underline');
			hR.innerHTML ="□";
			aR.innerHTML ="□";
			wR.innerHTML ="◆";
			$(".workBox").removeClass('hideS');
			$(".likeBox").addClass('hideS');

	        $(".D1.Rd").addClass('rotL_R');
				$(".Fd").addClass('rotL_F hide');

				$(".D1.Rd").removeClass('hide');
	        setTimeout(function(){
	        	// $(".F.u.r").addClass('D Du Dr');
	         //    $(".F.m.r").addClass('D Dm Dr');
	         //    $(".F.d.r").addClass('D Dd Dr');
	            $(".Fd").removeClass('F Fd Fl Fc Fr rotL_F');

	            $(".D1.R.d.l").addClass('F Fd Fl');
	            $(".D1.R.d.c").addClass('F Fd Fc');
	            $(".D1.R.d.r").addClass('F Fd Fr');
	            $(".D1.Rd").removeClass('rotL_R');
	        },450)

	        setTimeout(function(){
	            $(".D2.Dr").addClass('rotU_D');
				$(".Fr").addClass('rotU_F hide');

				$(".D2.Dr").removeClass('hide');

				$(".D2.Dc").addClass('rotU_D');
				$(".Fc").addClass('rotU_F hide');

				$(".D2.Dc").removeClass('hide');
	        },460)
	        setTimeout(function(){
	        	$(".Fr").removeClass('F Fu Fm Fd Fr rotU_F');

	            $(".D2.D.u.r").addClass('F Fu Fr');
	            $(".D2.D.m.r").addClass('F Fm Fr');
	            $(".D2.D.d.r").addClass('F Fd Fr');
	            $(".D2.Dr").removeClass('rotU_D');

	            $(".Fc").removeClass('F Fu Fm Fd Fc rotU_F');

	            $(".D2.D.u.c").addClass('F Fu Fc');
	            $(".D2.D.m.c").addClass('F Fm Fc');
	            $(".D2.D.d.c").addClass('F Fd Fc');
	            $(".D2.Dc").removeClass('rotU_D');
	        },910)

	        setTimeout(function(){
	            $(".D3.Rm").addClass('rotL_R');
				$(".Fm").addClass('rotL_F hide');

				$(".D3.Rm").removeClass('hide');
	        },920)
	        setTimeout(function(){
	            // $(".F.u.c").addClass('D Du Dc');
	            // $(".F.m.c").addClass('D Dm Dc');
	            // $(".F.d.c").addClass('D Dd Dc');
	            $(".Fm").removeClass('F Fm Fl Fc Fr rotL_F');

	            $(".D3.R.m.l").addClass('F Fm Fl');
	            $(".D3.R.m.c").addClass('F Fm Fc');
	            $(".D3.R.m.r").addClass('F Fm Fr');
	            $(".D3.Rm").removeClass('rotL_R');
	        },1370)
	    }
	});

	$('.work4').click(function(){
		if(w4Cli==0){
			l1Cli=0;
			l2Cli=0;
			l3Cli=0;
			l4Cli=0;
			l5Cli=0;
			Hclicked=0;
			Wclicked=1;
			Aclicked=0;
			w1Cli=0;
			$(".work1").removeClass('underline');
			w2Cli=0;
			$(".work2").removeClass('underline');
			w3Cli=0;
			$(".work3").removeClass('underline');
			w4Cli=1;
			$(".work4").addClass('underline');
			hR.innerHTML ="□";
			aR.innerHTML ="□";
			wR.innerHTML ="◆";
			$(".workBox").removeClass('hideS');
			$(".likeBox").addClass('hideS');

	        $(".E1.Uc").addClass('rotD_U');
				$(".Fc").addClass('rotD_F hide');

				$(".E1.Uc").removeClass('hide');
	        setTimeout(function(){
	        	$(".Fc").removeClass('F Fu Fm Fd Fc rotD_F');

	            $(".E1.U.u.c").addClass('F Fu Fc');
	            $(".E1.U.m.c").addClass('F Fm Fc');
	            $(".E1.U.d.c").addClass('F Fd Fc');
	            $(".E1.Uc").removeClass('rotD_U');
	        
	        },450)
	        setTimeout(function(){
	            $(".E2.Ld").addClass('rotR_L');
				$(".Fd").addClass('rotR_F hide');

				$(".E2.Ld").removeClass('hide');

				$(".E2.Lm").addClass('rotR_L');
				$(".Fm").addClass('rotR_F hide');

				$(".E2.Lm").removeClass('hide');
	        },460)
	        setTimeout(function(){
	        	$(".Fd").removeClass('F Fd Fl Fc Fr rotR_F');

	            $(".E2.L.d.l").addClass('F Fd Fl');
	            $(".E2.L.d.c").addClass('F Fd Fc');
	            $(".E2.L.d.r").addClass('F Fd Fr');
	            $(".E2.Ld").removeClass('rotR_L');

	            $(".Fm").removeClass('F Fd Fl Fc Fr rotR_F');

	            $(".E2.L.m.l").addClass('F Fm Fl');
	            $(".E2.L.m.c").addClass('F Fm Fc');
	            $(".E2.L.m.r").addClass('F Fm Fr');
	            $(".E2.Lm").removeClass('rotR_L');
	        },910)

	        setTimeout(function(){
	            $(".E3.Dr").addClass('rotU_D');
				$(".Fr").addClass('rotU_F hide');

				$(".E3.Dr").removeClass('hide');
	        },920)
	        setTimeout(function(){
	            $(".Fr").removeClass('F Fu Fm Fd Fr rotU_F');

	            $(".E3.D.u.r").addClass('F Fu Fr');
	            $(".E3.D.m.r").addClass('F Fm Fr');
	            $(".E3.D.d.r").addClass('F Fd Fr');
	            $(".E3.Dr").removeClass('rotU_D');
	        },1370)
	    }
	});




	$('.like1').click(function(){
		if(l1Cli==0){
			l1Cli=1;
			$(".like1").addClass('underline');
			l2Cli=0;
			$(".like2").removeClass('underline');
			l3Cli=0;
			$(".like3").removeClass('underline');
			l4Cli=0;
			$(".like4").removeClass('underline');
			l5Cli=0;
			$(".like5").removeClass('underline');
			Hclicked=0;
			Wclicked=0;
			Aclicked=0;
			w1Cli=0;
			w2Cli=0;
			w3Cli=0;
			w4Cli=0;
			hR.innerHTML ="□";
			aR.innerHTML ="◆";
			wR.innerHTML ="□";
			$(".likeBox").removeClass('hideS');
			$(".workBox").addClass('hideS');

	        $(".F1.Lu").addClass('rotR_L');
				$(".Fu").addClass('rotR_F hide');

				$(".F1.Lu").removeClass('hide');
	        setTimeout(function(){
	        	$(".Fu").removeClass('F Fu Fl Fc Fr rotR_F');

	            $(".F1.L.u.l").addClass('F Fu Fl');
	            $(".F1.L.u.c").addClass('F Fu Fc');
	            $(".F1.L.u.r").addClass('F Fu Fr');
	            $(".F1.Lu").removeClass('rotR_L');




	            con1=$(".con1").hasClass("F");
	            con2=$(".con2").hasClass("F");
	            con3=$(".con3").hasClass("F");
	            con4=$(".con4").hasClass("F");
	            con5=$(".con5").hasClass("F");
	            con6=$(".con6").hasClass("F");
	            con7=$(".con7").hasClass("F");
	            con8=$(".con8").hasClass("F");
	            con9=$(".con9").hasClass("F");
				if(con1&&con2&&con3&&con4&&con5&&con6&&con7&&con8&&con9){
					console.log("congratulation");
					$(".conE").addClass('hide');
					$(".cong").removeClass('hide');
					$(".cong").addClass('conghide');
				}
	        },450)
	    }
	});
	$('.like2').click(function(){
		if(l2Cli==0){
			l1Cli=0;
			$(".like1").removeClass('underline');
			l2Cli=1;
			$(".like2").addClass('underline');
			l3Cli=0;
			$(".like3").removeClass('underline');
			l4Cli=0;
			$(".like4").removeClass('underline');
			l5Cli=0;
			$(".like5").removeClass('underline');
			Hclicked=0;
			Wclicked=0;
			Aclicked=0;
			w1Cli=0;
			w2Cli=0;
			w3Cli=0;
			w4Cli=0;
			hR.innerHTML ="□";
			aR.innerHTML ="◆";
			wR.innerHTML ="□";
			$(".likeBox").removeClass('hideS');
			$(".workBox").addClass('hideS');

	        $(".G1.Dc").addClass('rotU_D');
				$(".Fc").addClass('rotU_F hide');

				$(".G1.Dc").removeClass('hide');
	        setTimeout(function(){
	        	$(".Fc").removeClass('F Fu Fm Fd Fc rotU_F');

	            $(".G1.D.u.c").addClass('F Fu Fc');
	            $(".G1.D.m.c").addClass('F Fm Fc');
	            $(".G1.D.d.c").addClass('F Fd Fc');
	            $(".G1.Dc").removeClass('rotU_D');
	        
	        },450)
	    }
	});

	$('.like3').click(function(){
		if(l3Cli==0){
			l1Cli=0;
			$(".like1").removeClass('underline');
			l2Cli=0;
			$(".like2").removeClass('underline');
			l3Cli=1;
			$(".like3").addClass('underline');
			l4Cli=0;
			$(".like4").removeClass('underline');
			l5Cli=0;
			$(".like5").removeClass('underline');
			Hclicked=0;
			Wclicked=0;
			Aclicked=0;
			w1Cli=0;
			w2Cli=0;
			w3Cli=0;
			w4Cli=0;
			hR.innerHTML ="□";
			aR.innerHTML ="◆";
			wR.innerHTML ="□";
			$(".likeBox").removeClass('hideS');
			$(".workBox").addClass('hideS');

	        $(".H1.Rm").addClass('rotL_R');
				$(".Fm").addClass('rotL_F hide');

				$(".H1.Rm").removeClass('hide');
	        setTimeout(function(){
	        	$(".Fm").removeClass('F Fm Fl Fc Fr rotL_F');

	            $(".H1.R.m.l").addClass('F Fm Fl');
	            $(".H1.R.m.c").addClass('F Fm Fc');
	            $(".H1.R.m.r").addClass('F Fm Fr');
	            $(".H1.Rm").removeClass('rotL_R');
	        
	        },450)
	    }
	});

	$('.like4').click(function(){
		if(l4Cli==0){
			l1Cli=0;
			$(".like1").removeClass('underline');
			l2Cli=0;
			$(".like2").removeClass('underline');
			l3Cli=0;
			$(".like3").removeClass('underline');
			l4Cli=1;
			$(".like4").addClass('underline');
			l5Cli=0;
			$(".like5").removeClass('underline');
			Hclicked=0;
			Wclicked=0;
			Aclicked=0;
			w1Cli=0;
			w2Cli=0;
			w3Cli=0;
			w4Cli=0;
			hR.innerHTML ="□";
			aR.innerHTML ="◆";
			wR.innerHTML ="□";
			$(".likeBox").removeClass('hideS');
			$(".workBox").addClass('hideS');

	        $(".I1.Ur").addClass('rotD_U');
				$(".Fr").addClass('rotD_F hide');

				$(".I1.Ur").removeClass('hide');
	        setTimeout(function(){
	        	$(".Fr").removeClass('F Fu Fm Fd Fr rotD_F');

	            $(".I1.U.u.r").addClass('F Fu Fr');
	            $(".I1.U.m.r").addClass('F Fm Fr');
	            $(".I1.U.d.r").addClass('F Fd Fr');
	            $(".I1.Ur").removeClass('rotD_U');
	        
	        },450)
	    }
	});

	$('.like5').click(function(){
		if(l5Cli==0){
			l1Cli=0;
			$(".like1").removeClass('underline');
			l2Cli=0;
			$(".like2").removeClass('underline');
			l3Cli=0;
			$(".like3").removeClass('underline');
			l4Cli=0;
			$(".like4").removeClass('underline');
			l5Cli=1;
			$(".like5").addClass('underline');
			Hclicked=0;
			Wclicked=0;
			Aclicked=0;
			w1Cli=0;
			w2Cli=0;
			w3Cli=0;
			w4Cli=0;
			hR.innerHTML ="□";
			aR.innerHTML ="◆";
			wR.innerHTML ="□";
			$(".likeBox").removeClass('hideS');
			$(".workBox").addClass('hideS');

	        $(".J1.Ld").addClass('rotR_L');
				$(".Fd").addClass('rotR_F hide');

				$(".J1.Ld").removeClass('hide');
	        setTimeout(function(){
	        	$(".Fd").removeClass('F Fd Fl Fc Fr rotR_F');

	            $(".J1.L.d.l").addClass('F Fd Fl');
	            $(".J1.L.d.c").addClass('F Fd Fc');
	            $(".J1.L.d.r").addClass('F Fd Fr');
	            $(".J1.Ld").removeClass('rotR_L');
	        
	        },450)
	    }
	});
 });