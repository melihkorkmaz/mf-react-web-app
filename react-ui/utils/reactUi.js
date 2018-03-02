
let _theme='red-theme';

const init = opt => {
    _theme = opt.theme;
}

const theme = () => _theme;

const userProps = (props) => (...fields) => {
    let response = Object.assign({}, props);
    fields.forEach(field => delete response[field]);
    return response;
}

export default {
    init,
    theme,
    userProps
}