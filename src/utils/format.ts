import { format as _format } from "date-fns";
import { zhCN } from "date-fns/locale";

export function format(str: string | number | Date, format: string = "PP") {
    return _format(str, format, { locale: zhCN })
}