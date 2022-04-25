import React from 'react';

const KindergartenPage = () => {
    return (
        <>
        <div className="box_content footer_form">
                <div className="footer_form_bg wow fadeInRight" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 footer_form_left wow fadeInLeft" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
                            <div className="footer_form_logo">
                                <noscript>
                                    <img src="https://abiturient.kg/wp-content/themes/abiturientkg/images/logo.png" alt="" />
                                </noscript>
                                <img className=" ls-is-cached lazyloaded" src="https://abiturient.kg/wp-content/themes/abiturientkg/images/logo.png" data-src="https://abiturient.kg/wp-content/themes/abiturientkg/images/logo.png" alt="" />
                            </div>
                            <div className="footer_form_title">Оставьте заявку и наш менеджер свяжется с Вами, чтобы записать ребенка на вводное тестирование
                            </div>
                            <div role="form" className="wpcf7" id="wpcf7-f8-o1" lang="ru-RU" dir="ltr">
                                <div className="screen-reader-response">
                                    <p role="status" aria-live="polite" aria-atomic="true">
                                    </p>
                                    <ul>
                                    </ul>
                                </div>
                                <form action="/silnoe_obrazovanie.html#wpcf7-f8-o1" method="post" className="wpcf7-form init" novalidate="novalidate" data-status="init">
                                    <div style={{display: 'none'}}>
                                        <input type="hidden" name="_wpcf7" value="8" />
                                        <input type="hidden" name="_wpcf7_version" value="5.4.2" />
                                        <input type="hidden" name="_wpcf7_locale" value="ru_RU" />
                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f8-o1" />
                                        <input type="hidden" name="_wpcf7_container_post" value="0" />
                                        <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                    </div><div className="form-group">
                                        <span className="wpcf7-form-control-wrap book_name">
                                            <input type="text" name="book_name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Ваше имя *" />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <span className="wpcf7-form-control-wrap book_tel">
                                            <input type="tel" name="book_tel" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control" aria-required="true" aria-invalid="false" placeholder="Ваш телефон *" />
                                        </span>
                                    </div>
                                    <div className="form-group"> Выберите отделение</div>
                                    <div className="form-group">
                                        <span className="wpcf7-form-control-wrap book_class">
                                            <select name="book_class" className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false">
                                                <option value="Начальная школа">Начальная школа</option>
                                                <option value="Детский сад">Детский сад</option>
                                                <option value="Старшая школа">Старшая школа</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="form-group-submit text-center">
                                        <input type="submit" value="Оставить заявку" className="wpcf7-form-control wpcf7-submit btn btn-primary" />
                                        <span className="ajax-loader">
                                        </span>
                                    </div>
                                    <div className="wpcf7-response-output" aria-hidden="true">
                                    </div>
                                </form>
                                </div>
                        </div>
                        <div className="col-md-6 footer_form_right wow fadeInRight" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
                            <div className="footer_form_info_title">Количество мест ограничено!</div>
                            <div classNmae="footer_form_info_subtitle">Всего осталось:</div>
                            <ul className="footer_form_info_list" >
                                <li>
                                    <span className="left">Начальная школа:</span>
                                    <span className="right"><span>5</span> мест</span>
                                </li>
                                <li>
                                    <span className="left">Старшая школа:</span>
                                    <span className="right"><span>8</span> мест</span>
                                </li>
                            </ul>
                            <div className="footer_form_info_footer">Спешите оставить заявку до окончания набора!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

                export default KindergartenPage;
