module.exports = () => {
    Array.prototype.forEach.call(document.querySelectorAll('[data-toggle="arrow"]'), (arrow) => {
        let arrowEl = $(arrow);
        $(arrowEl.data('target')).on('click', () => arrowEl.toggleClass('open'));
    });
};
