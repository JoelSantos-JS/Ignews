import Document , {Html, Head , Main , NextScript} from "next/document";



export default class MyDocument extends Document {
    render() {

            return (
                <Html>
                       <Head>

                                <link rel="preconnect" href="https://fonts.googleapis.com" />

                            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400;1,500&display=swap" rel="stylesheet"/>

                            <link rel="shortcut icon" href="favicon.png" type="image/png" />
                            <title>ig.news</title>

                        </Head> 


                        <body>
                                    <Main/>
                                <NextScript/>
                        </body>


                </Html>
            )

    }

}