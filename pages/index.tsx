import style from './index.module.css';

const Home = () => {
    return (
        <>
            <div className="title">
                Numan
            </div>

            <div className={style.colorGreen}>
                this is Green color wirh CSS Module Import
            </div>
        </>
    );
}

export default Home;
