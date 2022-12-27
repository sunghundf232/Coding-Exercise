# 미술관 티켓 가격을 계산해 주는 함수
#standard,student는 카테고리에 해당 하는 티겟 개수를 뜻합니다.



def ticket_price(standard,student):
     standard_price = 15000
     student_price = 8000

     total_price = standard * standard_price + student * standard_price

     return total_price

     
        