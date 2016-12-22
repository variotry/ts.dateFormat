/*!
 * date format
 * (c) vario
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

namespace variotry
{
	/**
	 * Dateを指定したフォーマットの文字列で取得する
	 * <pre>
	 * フォーマット文字は以下の通り
	 *	・Y：年（4桁）
	 *	・y：年（2桁）
	 *	・M：月
	 *	・D：日
	 *	・h：時
	 *	・m：分
	 *	・s：秒
	 *	・weekjp：曜日（日～土）
	 * YyMDhms は同じ文字を連続で並べるとその桁数を保証する形で表記する。
	 * 例えば Y年MM月DD日 とすると 2016年03月04日のように 月日が2桁表記が保証される。
	 * </pre>
	 * @param date		ソース値
	 * @param format	出力フォーマット(default="Y/MM/DD")
	 * @return フォーマとに沿った文字列
	 * @author vario
	 */
	export function dateFormat( date: Date, format: string = "Y/MM/DD" ): string
	{
		if ( date == null ) return "";

		format = format.replace( /[Y]+/g, match => alignDigit( date.getFullYear(), match.length ) );
		format = format.replace( /[y]+/g, match => alignDigit( date.getFullYear() % 100, match.length ) );
		var month = date.getMonth() + 1;
		format = format.replace( /[M]+/g, match => alignDigit( month, match.length ) );
		format = format.replace( /[D]+/g, match => alignDigit( date.getDate(), match.length ) );
		format = format.replace( /[h]+/g, match => alignDigit( date.getHours(), match.length ) );
		format = format.replace( /[m]+/g, match => alignDigit( date.getMinutes(), match.length ) );
		format = format.replace( /[s]+/g, match => alignDigit( date.getSeconds(), match.length ) );
		format = format.replace( /weekjp/g, DayOfWeekJp( date ) );

		return format;
	}

	/**
	 * 曜日の文字列（日,月,...,土）を取得する
	 * @private
	 * @param date 日付オブジェクト
	 * @return （日,月,...,土）の文字列
	 * @author vario
	 */
	function DayOfWeekJp( date: Date ): string
	{
		if ( date == null ) return "";
		switch ( date.getDay() )
		{
			default:
				return "";
			case 0:
				return "日";
			case 1:
				return "月";
			case 2:
				return "火";
			case 3:
				return "水";
			case 4:
				return "木";
			case 5:
				return "金";
			case 6:
				return "土";
		}
	}


	/**
	 * valの桁数がdigitに満たない場合、digitの桁数になるよう0補完する
	 * <pre>
	 * </pre>
	 * @private
	 * @param val	ソース値
	 * @param digit	桁数
	 * @return digit桁数が保証された文字列
	 * @author vario
	 */
	function alignDigit( val: number, digit?: number ): string
	{
		var valDigit = Math.abs( val ).toString().length;

		if ( !digit || digit <= 0 || digit <= valDigit ) return val.toString();

		var res = "";
		for ( var i = 0; i < digit; ++i )
		{
			res += "0";
		}

		var sign = val < 0 ? "-" : "";
		val = Math.abs( val );

		return sign + ( res + val.toString() ).slice( - digit );
	}
}
