import {ScrollArea} from "@/components/ui/scroll-area";
import {ICardColumn} from "@/types/global";
import {Badge} from "@/components/ui/badge";

export const CardColumn = ({title, children, count}: ICardColumn) => {
    return (
        <div className={'w-[330px] min-w-[330px] grid grid-rows-[30px_calc(100vh_-_220px)] gap-2'}>
            <div className={'flex items-center gap-2'}>
                <h2 className={'text-xl font-medium'}>{title}</h2>
                <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">{count}</Badge>
            </div>
            <ScrollArea className="w-full">
                <div className={'grid gap-4 pr-4'}>
                    {children}
                </div>
            </ScrollArea>
        </div>

    )
}