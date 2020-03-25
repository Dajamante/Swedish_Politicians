
import java.util.Random;

public class generateResult{

   public static void main(String[] args) {
       
       String[] array = {"00a2128a-986a-ea11-912e-901b0eac4c78",
                            "01a2128a-986a-ea11-912e-901b0eac4c78",
                            "3efe9e47-166a-ea11-912e-901b0eac4c78",
                            "3ffe9e47-166a-ea11-912e-901b0eac4c78",
                            "40fe9e47-166a-ea11-912e-901b0eac4c78",
                            "41fe9e47-166a-ea11-912e-901b0eac4c78",
                            "42fe9e47-166a-ea11-912e-901b0eac4c78",
                            "43fe9e47-166a-ea11-912e-901b0eac4c78",
                            "45fe9e47-166a-ea11-912e-901b0eac4c78",
                            "47fe9e47-166a-ea11-912e-901b0eac4c78",
                            "48fe9e47-166a-ea11-912e-901b0eac4c78",
                            "49fe9e47-166a-ea11-912e-901b0eac4c78",
                            "4afe9e47-166a-ea11-912e-901b0eac4c78",
                            "4bfe9e47-166a-ea11-912e-901b0eac4c78",
                            "4cfe9e47-166a-ea11-912e-901b0eac4c78",
                            "4efe9e47-166a-ea11-912e-901b0eac4c78",
                            "4ffe9e47-166a-ea11-912e-901b0eac4c78",
                            "50fe9e47-166a-ea11-912e-901b0eac4c78",
                            "51fe9e47-166a-ea11-912e-901b0eac4c78",
                            "52fe9e47-166a-ea11-912e-901b0eac4c78",
                            "53fe9e47-166a-ea11-912e-901b0eac4c78",
                            "55fe9e47-166a-ea11-912e-901b0eac4c78",
                            "56fe9e47-166a-ea11-912e-901b0eac4c78",
                            "57fe9e47-166a-ea11-912e-901b0eac4c78",
                            "58fe9e47-166a-ea11-912e-901b0eac4c78",
                            "59fe9e47-166a-ea11-912e-901b0eac4c78",
                            "5cfe9e47-166a-ea11-912e-901b0eac4c78",
                            "5dfe9e47-166a-ea11-912e-901b0eac4c78",
                            "5efe9e47-166a-ea11-912e-901b0eac4c78",
                            "5ffe9e47-166a-ea11-912e-901b0eac4c78",
                            "60fe9e47-166a-ea11-912e-901b0eac4c78",
                            "61fe9e47-166a-ea11-912e-901b0eac4c78",
                            "62fe9e47-166a-ea11-912e-901b0eac4c78",
                            "63fe9e47-166a-ea11-912e-901b0eac4c78",
                            "64fe9e47-166a-ea11-912e-901b0eac4c78",
                            "65fe9e47-166a-ea11-912e-901b0eac4c78",
                            "66fe9e47-166a-ea11-912e-901b0eac4c78",
                            "67fe9e47-166a-ea11-912e-901b0eac4c78",
                            "68fe9e47-166a-ea11-912e-901b0eac4c78",
                            "69fe9e47-166a-ea11-912e-901b0eac4c78",
                            "6afe9e47-166a-ea11-912e-901b0eac4c78"};
        
        Random rand = new Random();
        for(int i=0; i<array.length; i++){
 
            System.out.println("INSERT INTO resultat_sentiment (anforande_id, resultat) VALUES ('" + array[i] + "', " + String.valueOf(rand.nextFloat()) + ");");

        }
   }
}