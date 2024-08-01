import * as Separator from '@radix-ui/react-separator';

const Separtor = ({orientation}) => {
  return (
   <>
    <Separator.Root 
       style={
        orientation === "horizontal"
          ? { backgroundColor: 'black', width: '50vh', height: '2px' }
          : { backgroundColor: 'black', width: '2px', height: '4px' }
      }
        decorative 
        orientation={orientation}
      />
  
  </>
  )
}

export default Separtor