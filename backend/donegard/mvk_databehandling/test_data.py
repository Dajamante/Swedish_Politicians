from data import Data
import pandas as pd

def main():
    test = Data(user="postgres",database="api")
    
    df = pd.read_csv("nba.csv") 
    
    #TEST INSERT QUERY 
    test.insert_data_table(df,'mamma mia')
    # print(test.cursor)
    #test.get_data_table('"'+'Books'+'"')

if __name__ == '__main__':
    main()
