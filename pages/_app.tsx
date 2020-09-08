import '@tailwindcss/typography';
import '../styles/index.css';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

export function reportWebVitals(metric: any): void {
    console.log(metric)
};

function App({ Component, pageProps }: AppProps): ReactElement {
    return <Component { ...pageProps } />
}

export default App;