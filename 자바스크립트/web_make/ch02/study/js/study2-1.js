
// 자바스크립트 문법과 JSON 문법 간의 차이가 더 궁금한 분들은 이 링크를 참조하세요.

/*

JSON
개체 에는 JSON ( JavaScript Object NotationJSON )을 구문 분석 하고 값을 JSON으로 변환하는 메서드가 포함되어 있습니다. 호출하거나 구성할 수 없습니다.

설명
대부분의 전역 개체와 JSON달리 생성자가 아닙니다. new연산자 와 함께 사용하거나 JSON개체를 함수로 호출 할 수 없습니다. 의 모든 속성과 메서드는 JSON정적입니다(객체와 마찬가지로 Math).

자바스크립트와 JSON의 차이점
JSON은 객체, 배열, 숫자, 문자열, 부울 및 null. JavaScript 구문을 기반으로 하지만 JavaScript와는 다릅니다. 대부분의 JavaScript는 JSON 이 아닙니다 . 예를 들어:

개체 및 배열
속성 이름은 큰따옴표로 묶인 문자열이어야 합니다. 후행 쉼표는 금지되어 있습니다.

숫자
선행 0은 금지됩니다. 소수점 뒤에는 최소한 하나의 숫자가 와야 합니다. NaN지원되지 않습니다 Infinity.

모든 JSON 텍스트는 유효한 JavaScript 표현식이지만 JSON 상위 집합 개정 이후에만 가능합니다. 개정 전에 U+2028 LINE SEPARATOR 및 U+2029 PARAGRAPH SEPARATOR는 JSON의 문자열 리터럴 및 속성 키에 허용됩니다. 그러나 JavaScript 문자열 리터럴에서 동일한 용도는 SyntaxError.

undefined다른 차이점으로는 큰따옴표로 묶인 문자열만 허용하고 또는 주석을 지원하지 않는다는 점입니다 . JSON 기반의 보다 인간 친화적인 구성 형식을 사용하려는 사용자를 위해 Babel 컴파일러에서 사용하는 JSON5 와 보다 일반적으로 사용되는 YAML 이 있습니다 .

동일한 텍스트가 JavaScript 객체 리터럴과 JSON에서도 다른 값을 나타낼 수 있습니다. 자세한 내용은 개체 리터럴 구문과 JSON 비교를 참조하십시오 .

전체 JSON 문법
유효한 JSON 구문은 ABNF 로 표현되고 IETF JSON 표준(RFC) 에서 복사된 다음 문법으로 공식적으로 정의됩니다 .

JSON-text = object / array
begin-array     = ws %x5B ws  ; [ left square bracket
begin-object    = ws %x7B ws  ; { left curly bracket
end-array       = ws %x5D ws  ; ] right square bracket
end-object      = ws %x7D ws  ; } right curly bracket
name-separator  = ws %x3A ws  ; : colon
value-separator = ws %x2C ws  ; , comma
ws = *(
     %x20 /              ; Space
     %x09 /              ; Horizontal tab
     %x0A /              ; Line feed or New line
     %x0D                ; Carriage return
     )
value = false / null / true / object / array / number / string
false = %x66.61.6c.73.65   ; false
null  = %x6e.75.6c.6c      ; null
true  = %x74.72.75.65      ; true
object = begin-object [ member *( value-separator member ) ]
         end-object
member = string name-separator value
array = begin-array [ value *( value-separator value ) ] end-array
number = [ minus ] int [ frac ] [ exp ]
decimal-point = %x2E       ; .
digit1-9 = %x31-39         ; 1-9
e = %x65 / %x45            ; e E
exp = e [ minus / plus ] 1*DIGIT
frac = decimal-point 1*DIGIT
int = zero / ( digit1-9 *DIGIT )
minus = %x2D               ; -
plus = %x2B                ; +
zero = %x30                ; 0
string = quotation-mark *char quotation-mark
char = unescaped /
    escape (
        %x22 /          ; "    quotation mark  U+0022
        %x5C /          ; \    reverse solidus U+005C
        %x2F /          ; /    solidus         U+002F
        %x62 /          ; b    backspace       U+0008
        %x66 /          ; f    form feed       U+000C
        %x6E /          ; n    line feed       U+000A
        %x72 /          ; r    carriage return U+000D
        %x74 /          ; t    tab             U+0009
        %x75 4HEXDIG )  ; uXXXX                U+XXXX
escape = %x5C              ; \
quotation-mark = %x22      ; "
unescaped = %x20-21 / %x23-5B / %x5D-10FFFF
HEXDIG = DIGIT / %x41-46 / %x61-66   ; 0-9, A-F, or a-f
       ; HEXDIG equivalent to HEXDIG rule in [RFC5234]
DIGIT = %x30-39            ; 0-9
      ; DIGIT equivalent to DIGIT rule in [RFC5234]
중요하지 않은 공백은JSONNumber (숫자는 공백을 포함하지 않아야 함) 또는 JSONString(문자열에서 해당 문자로 해석되거나 오류가 발생하는 경우)를 제외한 모든 위치에 존재할 수 있습니다 . 탭 문자( U+0009 ), 캐리지 리턴( U+000D ), 줄 바꿈( U+000A ) 및 공백( U+0020 ) 문자는 유일하게 유효한 공백 문자입니다.

정적 속성
JSON[@@toStringTag]
속성 의 초기 값은 @@toStringTag문자열입니다 "JSON". 이 속성은 에서 사용됩니다 Object.prototype.toString().

정적 메서드
JSON.parse()
문자열 텍스트를 JSON으로 구문 분석하고 선택적으로 생성된 값과 해당 속성을 변환하고 값을 반환합니다.

JSON.stringify()
선택적으로 특정 속성만 포함하거나 사용자 정의 방식으로 속성 값을 대체하여 지정된 값에 해당하는 JSON 문자열을 반환합니다.

예
JSON 예
{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
클립 보드에 복사
JSON.parse()메소드를 사용하여 위의 JSON 문자열을 JavaScript 객체로 변환 할 수 있습니다 .

const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

console.log(JSON.parse(jsonText));

*/