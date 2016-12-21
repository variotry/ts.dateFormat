/*!
 * date format
 * (c) vario
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
declare namespace variotry {
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
    function dateFormat(date: Date, format?: string): string;
}
declare let vt: typeof variotry;
