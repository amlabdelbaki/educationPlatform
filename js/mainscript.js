  /* Team List Slider Start*/
        
    $(document).ready(function() {
//            $('.center').slick({
//              centerMode: true,
//              centerPadding: '60px',
//              slidesToShow: 3,
//              responsive: [
//                {
//                  breakpoint: 768,
//                  settings: {
//                    arrows: false,
//                    centerMode: true,
//                    centerPadding: '40px',
//                    slidesToShow: 3
//                  }
//                },
//                {
//                  breakpoint: 480,
//                  settings: {
//                    arrows: false,
//                    centerMode: true,
//                    centerPadding: '40px',
//                    slidesToShow: 1
//                  }
//                }
//              ]
//            });
        
        
	$(window).scroll(function(){
	
    });
         /*Place Holder Function*/
        jQuery('input,textarea').on('focus', function() {
            var $this = jQuery(this);
            $this.data('placeholder', $this.prop('placeholder'));
            $this.removeAttr('placeholder')
        }).on('blur', function() {
            var $this = jQuery(this);
            $this.prop('placeholder', $this.data('placeholder'));
        });
        
        
         /* ------------------------------- Window Load Funtions Start ------------------------------- */

  
        /*  Search Form */
//        jQuery(document).on('click', '.search-area a', function(e) {
//            e.preventDefault();
//            jQuery(this).siblings('form').toggle();
//        });

//        if (jQuery('.chosen-select , .chosen-select-deselect , .chosen-select-no-results , .chosen-select-width').length != '') {
//            var config = {
//                '.chosen-select': {
//                    width: "100%"
//                },
//                '.chosen-select-deselect': {
//                    allow_single_deselect: true
//                },
//                '.chosen-select-no-single': {
//                    disable_search_threshold: 10
//                },
//                '.chosen-select-no-results': {
//                    no_results_text: 'Oops, nothing found!'
//                },
//                '.chosen-select-width': {
//                    width: "95%"
//                }
//            }
//            for (var selector in config) {
//                jQuery(selector).chosen(config[selector]);
//            }
//        };

//        if (jQuery("cs-select-checklist .cs-checkbox-list").length != '') {
//            jQuery("cs-select-checklist .cs-checkbox-list").mCustomScrollbar({
//                setHeight: 55,
//                theme: "dark"
//            });
//        }
//        
        
        

    });
        /* Team List Slider End*/