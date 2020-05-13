const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
            close = document.querySelector(closeSelector),
            modal = document.querySelector(modalSelector);

        trigger.forEach(element => {

            element.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                }
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // открытие модального окна через бутстрэп с затемнением фона и удалением скрола (альтернатива)
                //document.body.classList.add('modal-open'); 
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            //document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                //document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);

};

export default modals;