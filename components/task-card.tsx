import axios from "@/lib/axios";
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card";
import {ITask} from "@/types/global";
import {Button} from "@/components/ui/button";

export const TaskCard = ({item}: { item: ITask }) => {
    const onClaim = () => {
        axios.patch(`/tasks/${item.id}/claim/`)
            .catch((error) => console.error('Error claiming task:', error))
    }

    return(
        <Card className="w-full rounded-lg py-3">
            <CardHeader className={'px-3'}>
                <CardTitle className={'break-all'}>{item.title}</CardTitle>
                <CardDescription className={'break-all'}>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className={'px-3'}>
                <div className={'flex items-center justify-between'}>
                    <span className={'text-muted-foreground text-sm'}>ID: {item.id}</span>
                    <span className={'text-muted-foreground text-sm'}>{item.assignee}</span>
                </div>
            </CardContent>
            {item.status !== 'DONE' && (
                <CardFooter className="gap-2 px-3">
                    <Button type={'button'} className={'ml-auto'} onClick={onClaim}>Claim Task</Button>
                </CardFooter>
            )}
        </Card>
    )
}