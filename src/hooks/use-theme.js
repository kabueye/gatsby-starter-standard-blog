import { createMuiTheme } from '@material-ui/core/styles';

const useTheme = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });
  return { theme };
};

export default useTheme;
