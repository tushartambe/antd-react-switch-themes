import { Switch, Typography } from 'antd';
import './App.css';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useState } from 'react';

const { Title } = Typography;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { switcher, themes } = useThemeSwitcher();

  const switchTheme = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
    switcher({ theme: isDarkMode ? themes.dark : themes.light });
  };

  return (
    <div className="App">
      <Title level={4}>Switching between themes in antd</Title>
      <Switch
        checkedChildren={"Dark Theme"}
        unCheckedChildren={"Light Theme"}
        checked={isDarkMode}
        onChange={switchTheme}
      />
    </div>
  );
}

export default App;
