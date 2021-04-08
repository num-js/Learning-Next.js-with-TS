/**
 * CSS - Styled Component
 */const MyTitle = (props) => {
    return (
        <>
            <h1 className="title">{props.titleData}</h1>
            <style jsx>
                {`
                    .title{
                        color: red;
                    }
                `}
            </style>
        </>
    )
}

/**
 * CSS - Styled Component with Variables
 */
const MyDivs = (props) => {
    const randomColor = Math.random() > 0.5 ? 'green' : 'blue';
    return (
        <>
            <div className="myDivs">{props.divData}</div>
            <style jsx>
                {`
                    .myDivs{
                        background: ${randomColor};
                    }
                `}
            </style>
        </>
    )
}

/**
 * CSS - Styled Component with Global JSX
 */
const MyPara = (props) => {
    return (
        <>
            <p className="para">{props.paraData}</p>
            <style jsx global>
                {`
                    .para{
                        color: orange;
                    }
                `}
            </style>
        </>
    )
}

const Home = () => {
    return (
        <>
            <div>
                <MyTitle
                    titleData="Hello Numan"
                />

                <MyDivs
                    divData="Hii this is Numan, a Full Stack Dev"
                />

                <MyPara
                    paraData="This is Para 1"
                />

                <MyPara
                    paraData="This is Para 2"
                />

                <p className="para">This is Para 3 (this is happning beacuse of global jsx)</p>

            </div>
        </>
    );
}

export default Home;
