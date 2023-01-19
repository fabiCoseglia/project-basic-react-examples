import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ShowHideMessageMiPractica } from '../components/myPractices/ShowHideMessage2'
import { ProgressBar } from '../components/ProgressBar'
import { ProgressBarPractice } from '../components/myPractices/ProgressBarPractice'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { StopwatchTimer } from '../components/StopwatchTimer'


export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/showHideMessage",
      element: <ShowHideMessage />,
    },
    {
      path: "/progressBar",
      element: <ProgressBar />,
    },
    {
      path: "/stopwatchTimer",
      element: <StopwatchTimer />,
    },
    {
      path: "/*",
      element: <Error404 />,
    },
    {
      path: "/myPractice/showHideMessage",
      element: <ShowHideMessageMiPractica/>,
    },
    {
      path: "/myPractice/progressBarPractice",
      element: <ProgressBarPractice/>,
    },
   

    
  ]