import { Component } from "react";
import './index.css'
// import {useRouter} from "next/router";

// const router = useRouter();
// const query = router.query;
// const name = query.name; 

class DigitalTimer4 extends Component {
    state = {
      isTimerRunning: false,
      timerLimit: 2,
      currentRunningSeconds: 0,
      isTimerRunning2: false,
      timerLimit2: 2,
      currentRunningSeconds2: 0,
      rightFlag: false,
      leftFlag: true
    }

    componentWillUnmount() {
        this.clearTimer()
        this.clearTimer2()
    }
    
    clearTimer = () => {
        clearInterval(this.intervalId)
    }

    clearTimer2 = () => {
      clearInterval(this.intervalId2)
    }
    
    onClickResetTimer = () => {
        // this.notifyTimerReset('Timer has me reset to default')
        this.setState({
          isTimerRunning: false,
          timerLimit: 2,
          currentRunningSeconds: 0,
          isTimerRunning2: false,
          timerLimit2: 2,
          currentRunningSeconds2: 0,
        })
        this.clearTimer()
        this.clearTimer2()
    }

    

    startTimerCountDown = () => {
      const {currentRunningSeconds, timerLimit} = this.state
      const isTimeCompleted = currentRunningSeconds === timerLimit * 60
      if (isTimeCompleted) {
        // this.notifyTimerCompleted('Your set time is Completed')
        this.setState({isTimerRunning: false, currentRunningSeconds: 0})
        this.clearTimer()
      } else {
        this.setState(prevState => ({
          currentRunningSeconds: prevState.currentRunningSeconds + 1,
        }))
      }
    }

    startTimerCountDown2 = () => {
      const {currentRunningSeconds2, timerLimit2} = this.state
      const isTimeCompleted2 = currentRunningSeconds2 === timerLimit2 * 60
      if (isTimeCompleted2) {
        // this.notifyTimerCompleted('Your set time is Completed')
        this.setState({isTimerRunning2: false, currentRunningSeconds2: 0})
        this.clearTimer2()
      } else {
        this.setState(prevState => ({
          currentRunningSeconds2: prevState.currentRunningSeconds2 + 1,
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

    startStopTimer2 = () => {
      const {isTimerRunning2, currentRunningSeconds2, timerLimit2} = this.state
      this.setState(prevState => ({isTimerRunning2: !prevState.isTimerRunning2}))
      const isTimeCompleted2 = currentRunningSeconds2 === timerLimit2 * 60
      if (isTimeCompleted2) {
        this.setState({isTimerRunning2: false})
        this.clearTimer2()
      }
      if (isTimerRunning2) {
        this.clearTimer2()
        this.setState({isTimerRunning2: false})
      } else {
        this.intervalId2 = setInterval(() => {
          this.startTimerCountDown2()
        }, 1000)
      }
  }

    onClickSwitchTimer = () => {
      const {rightFlag, leftFlag} = this.state
      // const {isTimerRunning2, currentRunningSeconds2, timerLimit2} = this.state
      // const {isTimerRunning, currentRunningSeconds, timerLimit} = this.state

      if (leftFlag){
        this.setState({isTimerRunning2:true})
        this.setState({isTimerRunning:false})
        this.startStopTimer2()
        this.startStopTimer()
        this.setState({leftFlag: false})
        this.setState({rightFlag: true})
        // console.log(this.state.rightFlag)
        // console.log(this.state.leftFlag)
      } else{
        this.setState({isTimerRunning:true})
        this.setState({isTimerRunnin2:false})
        this.startStopTimer2()
        this.startStopTimer()
        this.setState({leftFlag: true})
        this.setState({rightFlag: false})
        // console.log(this.state.rightFlag)
        // console.log(this.state.leftFlag)
      }
  }


  

    renderTimerControlOptions = () => {
        const {isTimerRunning} = this.state
        const {isTimerRunning2} = this.state
        const playImageUrl =
          'https://cdn-icons-png.flaticon.com/512/0/375.png'
        const stopImageUrl =
          'https://cdn2.iconfinder.com/data/icons/music-player-8/64/pause-512.png'
        const resetImageUrl =
          'https://icons-for-free.com/download-icon-bx+reset-1325051909167782801_512.png'
        const switchImageUrl =
          'https://cdn.iconscout.com/icon/free/png-256/switch-1470433-1244947.png'
        const startStopImage = isTimerRunning || isTimerRunning2 ? stopImageUrl : playImageUrl
        const startStopAltText = isTimerRunning || isTimerRunning2 ? 'pause icon' : 'play icon'
        const startStopText = isTimerRunning || isTimerRunning2 ? '停止' : '开始'
        
        
        return (
          <div className="control-options-container">
            <button
              className="start-stop-button"
              type="button"
              onClick={this.startStopTimer2}
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
              onClick={this.onClickSwitchTimer}
            >
              <div className="start-stop-container">
                <img src={switchImageUrl} className="reset-img" alt="reset icon" />
                <h1 className="start-stop-text">切换</h1>
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
    convertTimeToTimerFormat2 = () => {
      const {timerLimit2, currentRunningSeconds2} = this.state
      const timeInSeconds2 = timerLimit2 * 60 - currentRunningSeconds2
      const minutes2 = Math.floor(timeInSeconds2 / 60)
      const seconds2 = Math.floor(timeInSeconds2 % 60)
      const minutesInStringFormat2 = minutes2 > 9 ? minutes2 : `0${minutes2}`
      const secondsInStringFormat2 = seconds2 > 9 ? seconds2 : `0${seconds2}`
      return `${minutesInStringFormat2}:${secondsInStringFormat2}`
  }

    render() {
        const {isTimerRunning} = this.state
        const timerStatusText = isTimerRunning ? '计时中' : '暂停中'
        return (
          <div className="app-container">
            {/* <div className="timer-heading">福联青全国中学华语辩论比赛</div>
            <div className="header-container">
              <br></br>
              <h1 className="timer-heading">双方对辩</h1>
            </div> */}
            <div>
              <div>
                <div className="timer-block">
                  <h1 className="time-text">
                  <div className = "fang-text">&nbsp;正方&nbsp;&nbsp;</div>
                    {this.convertTimeToTimerFormat()} 
                    <div className = "fang-text">&nbsp;&nbsp;vs&nbsp;&nbsp;</div>
                    {this.convertTimeToTimerFormat2()}
                    <div className = "fang-text">&nbsp;&nbsp;反方&nbsp;</div>
                  </h1>
                  <p></p>
                  {/* <p className="time-status">{timerStatusText}</p> */}
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

export default DigitalTimer4