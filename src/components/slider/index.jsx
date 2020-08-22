
    const name = 'MySlider';
    const disabled = false;
    const value = 10;
    const min = 0;
    const max = 50;

    const label = 'Slider 1';

    const sliderHandler = value => {
        console.log('sliderHandler', value);
    }

    export const Slider = `<div class="component">
            <h2>Slider</h2>
            <we-slider name=${name} disabled=${disabled} value=${value} min=${min} max=${max} change-callback=${sliderHandler}>
                ${label}
            </we-slider>
        </div>`
