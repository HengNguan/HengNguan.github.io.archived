import { Component } from "react";
import './index.css'
// import {useRouter} from "next/router";

// const router = useRouter();
// const query = router.query;
// const name = query.name; 

class DigitalTimer1 extends Component {
    state = {
      isTimerRunning: false,
      timerLimit: 4,
      currentRunningSeconds: 0,
    }

    componentWillUnmount() {
        this.clearTimer()
    }
    
    clearTimer = () => {
        clearInterval(this.intervalId)
    }
    
    onClickResetTimer = () => {
        // this.notifyTimerReset('Timer has me reset to default')
        this.setState({
          isTimerRunning: false,
          timerLimit: 4,
          currentRunningSeconds: 0,
        })
        this.clearTimer()
    }

    startTimerCountDown = () => {
      const {currentRunningSeconds, timerLimit} = this.state
      const isTimeCompleted = currentRunningSeconds === timerLimit * 60
      if (isTimeCompleted) {
        this.notifyTimerCompleted('Your set time is Completed')
        this.setState({isTimerRunning: false, currentRunningSeconds: 0})
        this.clearTimer()
      } else {
        this.setState(prevState => ({
          currentRunningSeconds: prevState.currentRunningSeconds + 1,
        }))
      }
    }
    
    startStopTimer = () => {
        const {isTimerRunning, currentRunningSeconds, timerLimit} = this.state
        this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
        const isTimeCompleted = currentRunningSeconds === timerLimit * 60
        if (isTimeCompleted) {
          this.setState({isTimerRunning: false})
          this.clearTimer()
        }
        if (isTimerRunning) {
          this.clearTimer()
          this.setState({isTimerRunning: false})
        } else {
          this.intervalId = setInterval(() => {
            this.startTimerCountDown()
          }, 1000)
        }
    }

    renderTimerControlOptions = () => {
        const {isTimerRunning} = this.state
        const playImageUrl =
          'https://cdn-icons-png.flaticon.com/512/0/375.png'
        const stopImageUrl =
          'https://cdn2.iconfinder.com/data/icons/music-player-8/64/pause-512.png'
        const resetImageUrl =
          'https://icons-for-free.com/download-icon-bx+reset-1325051909167782801_512.png'
      
        const startStopImage = isTimerRunning ? stopImageUrl : playImageUrl
        const startStopAltText = isTimerRunning ? 'pause icon' : 'play icon'
        const startStopText = isTimerRunning ? '停止' : '开始'
        return (
          <div className="control-options-container">
            <button
              className="start-stop-button"
              type="button"
              onClick={this.startStopTimer}
            >
              <div className="start-stop-container">
                <img
                  src={startStopImage}
                  className="start-stop-img"
                  alt={startStopAltText}
                />
                <h1 className="start-stop-text">{startStopText}</h1>
              </div>
            </button>
            
    
            <button
              className="start-stop-button"
              type="button"
              onClick={this.onClickResetTimer}
            >
              <div className="start-stop-container">
                <img src={resetImageUrl} className="reset-img" alt="reset icon" />
                <h1 className="start-stop-text">重置</h1>
              </div>
            </button>
          </div>
        )
    }

    convertTimeToTimerFormat = () => {
        const {timerLimit, currentRunningSeconds} = this.state
        const timeInSeconds = timerLimit * 60 - currentRunningSeconds
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = Math.floor(timeInSeconds % 60)
        const minutesInStringFormat = minutes > 9 ? minutes : `0${minutes}`
        const secondsInStringFormat = seconds > 9 ? seconds : `0${seconds}`
        return `${minutesInStringFormat}:${secondsInStringFormat}`
    }

    render() {
        const {isTimerRunning} = this.state
        const timerStatusText = isTimerRunning ? '计时中' : '暂停中'
        return (
          <div className="app-container">
            <div>
              <div>
                <div className="timer-block">
                  <h1 className="time-text">{this.convertTimeToTimerFormat()}</h1>
                  <p className="time-status">{timerStatusText}</p>
                </div>
              </div>
              <div className="timer-control-container">
                {this.renderTimerControlOptions()}
              </div>
            </div>
          </div>
        )
      }
}

export default DigitalTimer1