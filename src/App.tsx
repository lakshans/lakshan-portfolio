import './App.css'
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

function App() {
  return (
    <ThemeProvider>
    <>

    <div className="bg-gradient-to-tr from-slate-400 to-indigo-700 dark:from-slate-900 dark:to-indigo-900">
      <div className="flex p-5 justify-between">
        <div>
          <Button variant="ghost" className="text-white">Home</Button>
          <Button variant="ghost" className="text-white">GitHub</Button>
          <Button variant="ghost" className="text-white">LinkedIn</Button>
          <Button variant="ghost" className="text-white">Contact</Button>
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
      
      <div className="flex min-h-screen justify-center">

        <div className="flex flex-col items-center">
          <div className="w-max">
            <p className="typing-animation overflow-hidden whitespace-nowrap mt-15 w-80 text-2xl font-bold text-white md:text-3xl md:mt-40 lg:text-5xl lg:mt-100">
              Hi, my name is Lakshan.
            </p>
          </div>
          <div className="text-sm p-1 font-style: italic text-white md:text-md md:p-2 lg:text-lg lg:p-3">
              I'm an Enthusiast @ Tech | Photography | Travel
          </div>
          <div className="w-70 grid grid-rows-3 gap-4 mt-10 md:grid-rows-3 md:w-75 md:mt-10 lg:grid-cols-3 lg:w-220">
            <Card>
              <CardHeader>
                <CardTitle>Tech</CardTitle>
                <CardDescription>Cool stuff I've worked on</CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button variant="default">View</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Photography</CardTitle>
                <CardDescription>Spent way too long editing these</CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button variant="default">View</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Travel</CardTitle>
                <CardDescription>Where to next?</CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button variant="default">View</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
    </ThemeProvider>
  )
}

export default App
