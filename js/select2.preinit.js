/**
 * @file
 * Preinit functions for Select2 integration
 */

(function ($) {

  Drupal.select2functions = {};

  if (Drupal.Select2 != undefined && Drupal.Select2.base_root != undefined) {

    Drupal.Select2.current_exludes = false;

    if (Drupal.Select2.settings_updated == undefined) {

      Drupal.Select2.settings_updated = false;
      Drupal.Select2.current_exludes = false;


    }
  }

})(jQuery);
