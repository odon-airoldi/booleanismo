import { useTime } from '../context/TimeContext'

export default function AppTime() {

    const { hour, minute, second } = useTime()

    return (
        <div className="absolute right-0">
            <div className="d-flex text-8xl">
                <span>{hour}</span><span>{minute}</span><span>{second}</span>
            </div>
        </div>
    )

}