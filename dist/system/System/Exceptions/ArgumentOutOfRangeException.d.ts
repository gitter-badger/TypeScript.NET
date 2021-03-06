/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import { Exception } from "../Exception";
import { ArgumentException } from "./ArgumentException";
export declare class ArgumentOutOfRangeException extends ArgumentException {
    actualValue: string | number | boolean;
    constructor(paramName: string, actualValue: string | number | boolean, message?: string, innerException?: Exception);
    protected getName(): string;
}
export default ArgumentOutOfRangeException;
