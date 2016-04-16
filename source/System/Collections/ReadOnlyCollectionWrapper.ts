/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */

import ArgumentNullException from "../Exceptions/ArgumentNullException";
import ReadOnlyCollection from "./ReadOnlyCollectionBase";

export default class ReadOnlyCollectionWrapper<T> extends ReadOnlyCollection<T>
{
	constructor(c:ICollection<T>)
	{
		super();

		if(!c)
			throw new ArgumentNullException('collection');

		var _ = this;
		_._getCount = ()=>c.count;
		_.contains = item=>c.contains(item);
		_.copyTo = (array:T[], index?:number)=>c.copyTo(array, index);
		_.getEnumerator = ()=> c.getEnumerator();
	}
}