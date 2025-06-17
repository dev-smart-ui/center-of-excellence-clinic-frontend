import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card";
import {ITaskCard} from "@/types/global";
import {Button} from "@/components/ui/button";

export const TaskCard = ({item}: { item: ITaskCard }) => {
    return(
        <Card className="w-full rounded-lg py-3">
            <CardHeader className={'px-3'}>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>New task</CardDescription>
            </CardHeader>
            <CardContent className={'px-3'}>
                <div className={'flex items-center justify-between'}>
                    <span className={'text-muted-foreground text-sm'}>ID: {item.id}</span>
                    {item.assignee && (
                        <span className={'text-muted-foreground text-sm'}>{item.assignee}</span>
                    )}
                </div>
            </CardContent>
            {!item.is_claimed && (
                <CardFooter className="gap-2 px-3">
                    <Button type={'button'} className={'ml-auto'}>Claim Task</Button>
                </CardFooter>
            )}
        </Card>
    )
}