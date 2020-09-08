import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='en-US'>
                <Head>
                    <meta charSet='utf-8' />
                    <link rel='stylesheet' href='https://use.typekit.net/sbg1kws.css' />
					<link rel='stylesheet' href='https://use.typekit.net/cub6off.css' />
					<link rel='stylesheet' href='https://use.typekit.net/hzg4mdi.css' />
					<link rel='stylesheet' href='https://use.typekit.net/lxd3fak.css' />
				</Head>
				<body className='block'>
					<Main />
					<NextScript />
				</body>
            </Html>
        )
    }
}