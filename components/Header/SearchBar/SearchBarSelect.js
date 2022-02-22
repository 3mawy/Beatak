import * as React from 'react';
import PropTypes from 'prop-types';
import SelectUnstyled, {selectUnstyledClasses} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {optionUnstyledClasses} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import {styled} from '@mui/system';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledButton = styled('button')(
    ({theme}) => `
  font-size: 0.875rem;
  font-weight: 500;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: max-content;
  background: ${theme.palette.common.grey};
  border: 0;
  border-radius: 25px;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.primary.contrastTextLight};
    

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
      padding-left: 8px;
    }
  }

  &::after {
    content: '▾';
    padding-left: 8px;
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
    ({theme}) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  font-weight: 500;
  padding: 5px;
  margin: 10px 0;
  min-width: max-content;
  background: ${theme.palette.primary.main};

  border-radius: 0.75em;
  color: ${theme.palette.primary.contrastTextLight};
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
    ({theme}) => `

  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    color: ${theme.palette.primary.contrastText};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;


function CustomSelect(props) {
    const components = {
        Root: StyledButton,
        Listbox: StyledListbox,
        Popper: StyledPopper,
        ...props.components,
    };

    return <SelectUnstyled {...props} components={components}/>;
}

CustomSelect.propTypes = {
    /**
     * The components used for each slot inside the Select.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components: PropTypes.shape({
        Listbox: PropTypes.elementType,
        Popper: PropTypes.elementType,
        Root: PropTypes.elementType,
    }),
};

export default function UnstyledSelectsMultiple() {
    const [value, setValue] = React.useState(10);
    return (
        <div>
            <CustomSelect value={value} onChange={setValue}>
                <StyledOption value={10}>Ten</StyledOption>
                <StyledOption value={20}>Twenty</StyledOption>
                <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect>

        </div>
    );
}
