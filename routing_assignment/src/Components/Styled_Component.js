import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Text = styled.span`
    font-family: ${font('primary')};
    background-color: #2a9d8f;
    color: ${palette('grayscale', 0, true)};
    font-size: 5em;
`

Text.defaultProps = {
    palette: 'primary'
}

export default Text;