import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Oval
            height={100}
            width={100}
            color="#4fa94d"
            wrapperStyle={{
                position: "absolute",
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
    );
}

export default Loader