'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blue = require('material-ui/colors/blue');

var _blue2 = _interopRequireDefault(_blue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customTheme = {
  palette: {
    primary: {
      light: _blue2.default[300],
      main: _blue2.default[500],
      dark: _blue2.default[700]
    },
    secondary: {
      light: _blue2.default[300],
      main: _blue2.default[500],
      dark: _blue2.default[700]
    }
  },
  typography: {
    fontFamily: '"Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;'
  },
  overrides: {
    MuiToolbar: {
      root: {
        height: 76,
        '@media (min-width: 600px)': {
          minHeight: 76
        }
      }
    },
    MuiTab: {
      root: {
        '@media (min-width: 960px)': {
          minWidth: 'auto'
        }
      }
    }
  }
}; // import red from 'material-ui/colors/red';
exports.default = customTheme;