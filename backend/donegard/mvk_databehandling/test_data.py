from data import Data
import pandas as pd

def main():
    test = Data(user="postgres",database="MVK")
    
    #df = pd.read_csv("nba.csv") 
    df = test.get_data_table('anforandetext')
    
    #TEST INSERT QUERY 
    test.insert_data_table(df, 'resultat')
    # print(test.cursor)
    #test.get_data_table('"'+'Books'+'"')

if __name__ == '__main__':
    main()
